import zipfile
import xml.etree.ElementTree as ET
import sys
import os

def extract_text_from_docx(docx_path):
    try:
        with zipfile.ZipFile(docx_path, 'r') as docx_zip:
            xml_content = docx_zip.read('word/document.xml')
        
        tree = ET.fromstring(xml_content)
        # The namespace for Word XML
        # Usually it's w:t for text nodes. We will just find all text nodes.
        words = []
        for node in tree.iter():
            if node.tag.endswith('}t') and node.text:
                words.append(node.text)
        
        text = ''.join(words)
        # actually, w:p represents paragraphs, w:t represents text. We should join by spaces and newlines.
        
        paragraphs = []
        for p in tree.iter():
            if p.tag.endswith('}p'):
                p_texts = []
                for t in p.iter():
                    if t.tag.endswith('}t') and t.text:
                        p_texts.append(t.text)
                if p_texts:
                    paragraphs.append("".join(p_texts))
                    
        return "\n".join(paragraphs)
    except Exception as e:
        return str(e)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python extract_docx.py <docx_path>")
        sys.exit(1)
        
    path = sys.argv[1]
    text = extract_text_from_docx(path)
    
    with open("docx_content.txt", "w", encoding="utf-8") as f:
        f.write(text)
    print("Extracted to docx_content.txt")
