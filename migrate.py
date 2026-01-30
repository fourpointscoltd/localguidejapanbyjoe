#!/usr/bin/env python3
"""
Ghost to Astro migration script
Converts Ghost JSON export to Astro content collection markdown files
"""

import json
import os
import re
from datetime import datetime
from pathlib import Path
import html
import csv

def clean_html_to_markdown(html_content):
    """Convert HTML to clean markdown"""
    if not html_content:
        return ""

    text = html_content

    # Handle common HTML entities
    text = html.unescape(text)

    # Convert headers
    text = re.sub(r'<h1[^>]*>(.*?)</h1>', r'# \1\n\n', text, flags=re.DOTALL)
    text = re.sub(r'<h2[^>]*>(.*?)</h2>', r'## \1\n\n', text, flags=re.DOTALL)
    text = re.sub(r'<h3[^>]*>(.*?)</h3>', r'### \1\n\n', text, flags=re.DOTALL)
    text = re.sub(r'<h4[^>]*>(.*?)</h4>', r'#### \1\n\n', text, flags=re.DOTALL)

    # Convert links
    text = re.sub(r'<a[^>]*href="([^"]*)"[^>]*>(.*?)</a>', r'[\2](\1)', text, flags=re.DOTALL)

    # Convert images
    text = re.sub(r'<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*/?>',  r'![\2](\1)', text)
    text = re.sub(r'<img[^>]*src="([^"]*)"[^>]*/?>',  r'![](\1)', text)

    # Convert figure/figcaption
    text = re.sub(r'<figure[^>]*>(.*?)</figure>', r'\1\n\n', text, flags=re.DOTALL)
    text = re.sub(r'<figcaption[^>]*>(.*?)</figcaption>', r'*\1*\n', text, flags=re.DOTALL)

    # Convert lists
    text = re.sub(r'<ul[^>]*>', '\n', text)
    text = re.sub(r'</ul>', '\n', text)
    text = re.sub(r'<ol[^>]*>', '\n', text)
    text = re.sub(r'</ol>', '\n', text)
    text = re.sub(r'<li[^>]*>(.*?)</li>', r'- \1\n', text, flags=re.DOTALL)

    # Convert emphasis
    text = re.sub(r'<strong[^>]*>(.*?)</strong>', r'**\1**', text, flags=re.DOTALL)
    text = re.sub(r'<b[^>]*>(.*?)</b>', r'**\1**', text, flags=re.DOTALL)
    text = re.sub(r'<em[^>]*>(.*?)</em>', r'*\1*', text, flags=re.DOTALL)
    text = re.sub(r'<i[^>]*>(.*?)</i>', r'*\1*', text, flags=re.DOTALL)

    # Convert code
    text = re.sub(r'<code[^>]*>(.*?)</code>', r'`\1`', text, flags=re.DOTALL)
    text = re.sub(r'<pre[^>]*>(.*?)</pre>', r'```\n\1\n```\n', text, flags=re.DOTALL)

    # Convert blockquotes
    text = re.sub(r'<blockquote[^>]*>(.*?)</blockquote>', lambda m: '> ' + m.group(1).strip().replace('\n', '\n> ') + '\n\n', text, flags=re.DOTALL)

    # Convert paragraphs
    text = re.sub(r'<p[^>]*>(.*?)</p>', r'\1\n\n', text, flags=re.DOTALL)

    # Convert line breaks
    text = re.sub(r'<br\s*/?>', '\n', text)
    text = re.sub(r'<hr\s*/?>', '\n---\n', text)

    # Remove remaining HTML tags
    text = re.sub(r'<[^>]+>', '', text)

    # Clean up whitespace
    text = re.sub(r'\n{3,}', '\n\n', text)
    text = text.strip()

    return text

def sanitize_slug(slug):
    """Make sure slug is valid for file names"""
    # Remove any characters that aren't alphanumeric, dash, or underscore
    slug = re.sub(r'[^a-zA-Z0-9\-_]', '-', slug)
    # Remove multiple consecutive dashes
    slug = re.sub(r'-+', '-', slug)
    # Remove leading/trailing dashes
    slug = slug.strip('-')
    return slug or 'untitled'

def load_analytics(csv_path):
    """Load analytics data from CSV"""
    analytics = {}
    try:
        with open(csv_path, 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            for row in reader:
                post_id = row.get('id', '')
                if post_id:
                    analytics[post_id] = {
                        'tags': row.get('tags', '').split(', ') if row.get('tags') else [],
                        'featured': row.get('featured', 'false').lower() == 'true',
                    }
    except Exception as e:
        print(f"Warning: Could not load analytics: {e}")
    return analytics

def migrate_posts(json_path, csv_path, output_dir):
    """Main migration function"""

    # Load analytics for tags
    analytics = load_analytics(csv_path)

    # Load Ghost export
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    posts = data['db'][0]['data']['posts']

    # Create output directory
    output_path = Path(output_dir)
    output_path.mkdir(parents=True, exist_ok=True)

    # Remove existing sample posts
    for f in output_path.glob('*.md'):
        f.unlink()

    migrated = 0
    skipped = 0

    for post in posts:
        # Skip drafts and pages
        if post.get('status') != 'published' or post.get('type') != 'post':
            skipped += 1
            continue

        post_id = post.get('id', '')
        title = post.get('title', 'Untitled')
        slug = sanitize_slug(post.get('slug', 'untitled'))

        # Get content - try lexical first, then html, then plaintext
        content = ''
        if post.get('html'):
            content = clean_html_to_markdown(post['html'])
        elif post.get('plaintext'):
            content = post['plaintext']

        # Get dates
        pub_date = post.get('published_at', '')
        if pub_date:
            try:
                dt = datetime.fromisoformat(pub_date.replace('Z', '+00:00'))
                pub_date = dt.strftime('%Y-%m-%d')
            except:
                pub_date = datetime.now().strftime('%Y-%m-%d')
        else:
            pub_date = datetime.now().strftime('%Y-%m-%d')

        # Get metadata
        feature_image = post.get('feature_image', '')
        custom_excerpt = post.get('custom_excerpt', '')
        featured = post.get('featured', False)

        # Get tags from analytics CSV
        tags = []
        if post_id in analytics:
            raw_tags = analytics[post_id].get('tags', [])
            # Clean tags - remove emoji and special characters for cleaner tags
            for tag in raw_tags:
                tag = tag.strip()
                if tag and not tag.startswith('#Import'):
                    # Remove emoji but keep the text
                    clean_tag = re.sub(r'[^\w\s-]', '', tag).strip()
                    if clean_tag:
                        tags.append(clean_tag)
            featured = featured or analytics[post_id].get('featured', False)

        # Build frontmatter
        frontmatter = f'''---
title: "{title.replace('"', '\\"')}"
description: "{(custom_excerpt or '').replace('"', '\\"')}"
pubDate: {pub_date}
author: "Joe Tanaka"
'''

        if feature_image:
            frontmatter += f'image: "{feature_image}"\n'

        if tags:
            tags_str = json.dumps(tags)
            frontmatter += f'tags: {tags_str}\n'

        if featured:
            frontmatter += 'featured: true\n'

        frontmatter += '---\n\n'

        # Write file
        file_path = output_path / f'{slug}.md'
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(frontmatter + content)

        migrated += 1

    print(f"Migration complete!")
    print(f"  Migrated: {migrated} posts")
    print(f"  Skipped: {skipped} (drafts/pages)")

if __name__ == '__main__':
    import sys

    json_path = '/Users/yuunakamura/Downloads/local-guide-japan.ghost.2026-01-30-12-21-50.json'
    csv_path = '/Users/yuunakamura/Downloads/post-analytics.2026-01-30.csv'
    output_dir = 'src/content/blog'

    migrate_posts(json_path, csv_path, output_dir)
