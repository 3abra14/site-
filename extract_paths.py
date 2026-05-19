import os
import re

svg_path = r"C:\Users\Abdel\OneDrive\Desktop\ASP\Clicic\The_Medical_Architect\clean_logo.svg"
output_dir = r"C:\Users\Abdel\OneDrive\Desktop\ASP\Clicic\The_Medical_Architect\temp_svgs"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

with open(svg_path, 'r') as f:
    content = f.read()

# Find all paths
paths = re.findall(r'<path[^>]*d="([^"]*)"[^>]*>', content)
# Find all group colors
groups = re.findall(r'<g fill="([^"]*)">(.*?)</g>', content, re.DOTALL)

counter = 0
for color, group_content in groups:
    group_paths = re.findall(r'<path[^>]*d="([^"]*)"[^>]*>', group_content)
    for p_d in group_paths:
        file_name = f"path_{counter}_{color.replace('#', '')}.svg"
        with open(os.path.join(output_dir, file_name), 'w') as f:
            f.write(f'<?xml version="1.0" encoding="utf-8"?>\n<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="198px" height="186px" viewBox="0 0 198 186">\n <path fill="{color}" d="{p_d}"/>\n</svg>')
        counter += 1

print(f"Extracted {counter} paths to {output_dir}")
