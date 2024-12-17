# 🎨 svgs

## 🚀 Overview

**svgs** is a modern **Next.js 15** web application that enables users to design custom SVG patterns with their own colors and parameter choices. With a responsive interface and dynamic controls, the app delivers a seamless design experience for scalable vector graphics.

---

## 🛠️ Tech Stack

- **Next.js 15** w/ App Router: Optimized for server-side rendering and performance.
- **TypeScript**: Ensures robust, type-safe development.
- **TailwindCSS**: Utility-first CSS for rapid, responsive UI design.
- **shadcn/ui**: Accessible, composable components built on TailwindCSS.
- **Framer Motion**: Smooth animations and interactions.
- **p5.js**: Creative coding library for programmatic SVG generation.

---

## ✨ Features

- **Custom SVG Design**: Design unique SVG patterns with real-time previews.
- **Parameter Control**: Adjust size, spacing, rotation, opacity, and repetition.
- **Color Selection**: Apply and preview custom colors instantly.
- **Dynamic Animations**: Smooth, visually engaging transitions.
- **Responsive UI**: Optimized for all devices using TailwindCSS.
- **Export Designs**: Download your custom SVG patterns.
- **Creative Flexibility**: Programmatic design powered by **p5.js**.

---

## 📂 Project Structure

```
/src
├── app/                # Next.js app router pages
├── components/         # Reusable UI components
├── styles/             # TailwindCSS configurations
├── lib/                # Utility libraries
└── public/             # Static assets
```

---

## 🚧 Setup

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-repository/svgs.git
   cd svgs
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run the Development Server**:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to get started.

---

## 🎨 Using the SVG Design Tool

1. **Access the Design Tool**:
   - Navigate to the main page of the application to find the SVG Design Tool.

2. **Select a Template**:
   - Use the dropdown menu to select a predefined SVG template.

3. **Set Dimensions**:
   - Use the width and height input fields to set the dimensions of your canvas.

4. **Choose Colors**:
   - Select your desired color using the color picker.
   - Click the "Cache Color" button to save the selected color for reuse.

5. **Adjust Parameters**:
   - Modify the parameter input to change the size and spacing of the SVG elements.

6. **Preview Your Design**:
   - The canvas will update in real-time to reflect your changes.

7. **Export Your Design**:
   - Click the "Export as SVG" button to download your design as an SVG file.

8. **Use Cached Colors**:
   - View and select from your cached colors to apply them to your design.

---

## 📜 License

Licensed under the [MIT License](LICENSE).
