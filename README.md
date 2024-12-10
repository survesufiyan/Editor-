## **Features**
- **Dynamic Text Formatting**:
  - `#` followed by a space converts the text into a **heading**.
  - `*` followed by a space applies **bold formatting**.
  - `**` followed by a space applies a **red text** style.
  - `***` followed by a space applies **underline formatting**.
  
- **Content Persistence**:
  - The editor saves all content in `localStorage` when the **Save** button is clicked.
  - Saved content is automatically restored upon page refresh.

- **Built with Draft.js**:
  - Leverages Draft.js for creating a customizable and robust text editor.

---

## **Technologies Used**

- **React.js**: Frontend framework for building the application.
- **Draft.js**: Rich text editor library for managing editor state and formatting.
- **localStorage**: For persisting content between sessions.

---

## **How to Run**

### **1. Clone the Repository**
```bash
git clone https://github.com/yourusername/rich-text-editor.git
cd rich-text-editor
```

### **2. Install Dependencies**
```bash
npm install
### **3. Start the Application**
```bash
npm start
The app will be available at `http://localhost:3000`.
## **How to Use**

1. Open the editor in your browser.
2. Use the following symbols at the start of a line to apply formatting:
   - `#` + Space: Heading
   - `*` + Space: Bold
   - `**` + Space: Red text
   - `***` + Space: Underline
3. Click the **Save** button to persist the content.
4. Refresh the page to see the saved content restored.

## **Future Enhancements**

- Add support for additional formatting options (e.g., italic, strikethrough).
- Implement multi-block formatting and better keyboard shortcuts.
- Add support for exporting content as HTML or Markdown.

## **Contributing**
Contributions are welcome! Please open an issue or submit a pull request with your ideas and improvements.

