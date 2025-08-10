# Portfolio Site - Google TypeScript Style Guide Implementation

This portfolio site has been updated to follow the [Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html) strictly. The project uses functional components with TypeScript and implements comprehensive code quality standards.

## 🎯 Style Guide Compliance

### ✅ Implemented Standards

- **File Structure**: UTF-8 encoding, proper import/export organization
- **Naming Conventions**: PascalCase for interfaces (prefixed with 'I'), camelCase for functions/variables
- **Exports**: Named exports preferred, default exports for backward compatibility
- **TypeScript**: Strict typing, proper interface definitions, type imports
- **Documentation**: JSDoc comments for all public functions and components
- **Formatting**: 2-space indentation, single quotes, semicolons required
- **React**: Functional components with hooks, proper prop typing

### 📁 Project Structure

```
portfolio-site/
├── app/
│   ├── components/          # UI components (MVVM pattern)
│   │   ├── hero/           # Hero section components
│   │   ├── shared/         # Reusable components
│   │   └── ...
│   ├── hooks/              # Custom React hooks
│   ├── types/              # TypeScript type definitions
│   ├── constants/          # Application constants
│   ├── utils/              # Utility functions
│   └── ...
├── data/                   # JSON data files
├── public/                 # Static assets
└── ...
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Install additional ESLint plugins for style guide compliance
npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-import eslint-plugin-jsdoc eslint-plugin-react eslint-plugin-react-hooks
```

### Development

```bash
# Start development server
npm run dev

# Run linting with style guide rules
npm run lint

# Fix linting issues automatically
npm run lint:fix

# Type checking
npm run type-check
```

## 📋 Style Guide Rules

### 1. File Structure

```typescript
/**
 * @fileoverview Description of file purpose and contents.
 */

// 1. Copyright information (if present)
// 2. JSDoc with @fileoverview (if present)
// 3. Imports (grouped and alphabetized)
// 4. Implementation
```

### 2. Naming Conventions

```typescript
// Interfaces: PascalCase with 'I' prefix
interface IUserProfile {
  name: string;
  email: string;
}

// Types: PascalCase
type UserStatus = 'active' | 'inactive';

// Functions: camelCase
function getUserProfile(): IUserProfile {
  // implementation
}

// Variables: camelCase
const userProfile: IUserProfile = getUserProfile();

// Constants: UPPER_CASE
const API_BASE_URL = 'https://api.example.com';
```

### 3. Imports and Exports

```typescript
// Prefer named exports
export function ComponentName(): ReactElement {
  // implementation
}

// Use type imports for types
import type { IUserProfile } from './types';

// Group imports: builtin, external, internal, relative
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import type { IUserProfile } from '../types';
import { API_BASE_URL } from '../constants';

import { ComponentName } from './ComponentName';
```

### 4. Component Structure

```typescript
/**
 * ComponentName component that provides a brief description.
 * 
 * @param props - The component props
 * @param props.propName - Description of the prop
 * @returns The ComponentName component JSX element
 */
export function ComponentName({ propName }: IComponentNameProps): ReactElement {
  // State and hooks
  const [state, setState] = useState<string>('');

  // Event handlers
  const handleClick = (): void => {
    // implementation
  };

  // Render
  return (
    <div>
      {/* JSX content */}
    </div>
  );
}

// Legacy default export for backward compatibility
export default ComponentName;
```

### 5. Type Definitions

```typescript
/**
 * @fileoverview Type definitions for the application.
 */

// Core interfaces
export interface IUser {
  id: string;
  name: string;
  email: string;
}

// Component props interfaces
export interface IComponentProps {
  user: IUser;
  onUpdate: (user: IUser) => void;
}

// Hook return types
export interface IUseUserReturn {
  user: IUser | null;
  loading: boolean;
  error: string | null;
}
```

## 🔧 ESLint Configuration

The project uses a comprehensive ESLint configuration that enforces:

- Google TypeScript Style Guide rules
- React best practices
- Import/export consistency
- Naming conventions
- Documentation requirements
- Code formatting standards

### Key Rules

```javascript
// Naming conventions
'@typescript-eslint/naming-convention': [
  'error',
  {
    selector: 'interface',
    format: ['PascalCase'],
    prefix: ['I'],
  },
  // ... more rules
],

// Import organization
'import/order': [
  'error',
  {
    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
    'newlines-between': 'always',
    alphabetize: { order: 'asc', caseInsensitive: true },
  },
],

// Documentation
'jsdoc/require-jsdoc': [
  'error',
  {
    publicOnly: true,
    require: {
      FunctionDeclaration: true,
      MethodDefinition: true,
      ClassDeclaration: true,
    },
  },
],
```

## 📚 Component Guidelines

### 1. Functional Components

- Use functional components with hooks
- Implement proper TypeScript typing
- Include JSDoc documentation
- Use named exports

### 2. Props Interface

```typescript
interface IComponentProps {
  requiredProp: string;
  optionalProp?: number;
  callbackProp: (value: string) => void;
}
```

### 3. Event Handlers

```typescript
const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
  // implementation
};
```

### 4. State Management

```typescript
const [state, setState] = useState<string>('');
const [loading, setLoading] = useState<boolean>(false);
```

## 🎨 Styling Guidelines

### 1. CSS Classes

- Use Tailwind CSS utility classes
- Maintain consistent spacing and colors
- Follow responsive design principles

### 2. Component Styling

```typescript
// Use consistent class naming
className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md"
```

## 🧪 Testing Guidelines

### 1. Component Testing

```typescript
import { render, screen } from '@testing-library/react';
import { ComponentName } from './ComponentName';

describe('ComponentName', () => {
  it('renders correctly', () => {
    render(<ComponentName propName="test" />);
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
```

## 📝 Documentation Standards

### 1. JSDoc Comments

```typescript
/**
 * Function description that explains what it does.
 * 
 * @param paramName - Description of the parameter
 * @param options - Optional configuration object
 * @returns Description of the return value
 * @throws ErrorType - Description of when this error is thrown
 */
function functionName(paramName: string, options?: IOptions): string {
  // implementation
}
```

### 2. Component Documentation

```typescript
/**
 * ComponentName component that provides a brief description.
 * 
 * @param props - The component props
 * @param props.propName - Description of the prop
 * @returns The ComponentName component JSX element
 */
```

## 🔄 Migration Guide

### From Default Exports to Named Exports

1. Update component exports:
```typescript
// Before
export default function ComponentName() {}

// After
export function ComponentName(): ReactElement {}
export default ComponentName; // Legacy compatibility
```

2. Update imports:
```typescript
// Before
import ComponentName from './ComponentName';

// After
import { ComponentName } from './ComponentName';
```

### Interface Naming

1. Add 'I' prefix to interfaces:
```typescript
// Before
interface Props {}

// After
interface IProps {}
```

## 🚨 Common Issues and Solutions

### 1. Import/Export Errors

- Ensure all components use named exports
- Check import paths are correct
- Verify type imports use `import type`

### 2. Naming Convention Errors

- Interfaces must start with 'I'
- Functions and variables use camelCase
- Constants use UPPER_CASE

### 3. Documentation Errors

- All public functions need JSDoc comments
- Include parameter and return type documentation
- Use proper JSDoc syntax

## 📖 Additional Resources

- [Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [ESLint Rules Documentation](https://eslint.org/docs/rules/)

## 🤝 Contributing

1. Follow the Google TypeScript Style Guide
2. Run `npm run lint` before committing
3. Ensure all tests pass
4. Update documentation as needed
5. Use conventional commit messages

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
