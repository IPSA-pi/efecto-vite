import fs from 'fs';
import path from 'path';

const excludeDirs = ['node_modules', '.git']; // Add any directories you want to exclude

// Function to create a tree representation of directory structure
const generateDirectoryTree = (dirPath, indent = '', root = true) => {
  let tree = root ? `${path.basename(dirPath)}\n` : ''; // Include root directory name at the top

  // Get all files and directories within the current directory
  const filesAndDirs = fs.readdirSync(dirPath).filter(item => !excludeDirs.includes(item));

  filesAndDirs.forEach((name, index) => {
    const filePath = path.join(dirPath, name);
    const isLast = index === filesAndDirs.length - 1;
    const stats = fs.statSync(filePath);

    // Add current file/directory to the tree
    tree += `${indent}${isLast ? '└── ' : '├── '}${name}\n`;

    // If current path is a directory, recurse
    if (stats.isDirectory()) {
      tree += generateDirectoryTree(filePath, `${indent}${isLast ? '    ' : '|   '}`, false);
    }
  });

  return tree;
};

// Start from the current working directory or adjust as needed
const projectRootPath = process.cwd(); // Or replace with a specific path
const directoryTree = generateDirectoryTree(projectRootPath);

console.log(directoryTree);
// Optionally, write the tree to a file
fs.writeFileSync('directoryTree.txt', directoryTree);
