import {createRoot} from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'
import './index.css';
import {App} from './App';

createRoot(document.getElementById('root')!).render(<ChakraProvider><App /></ChakraProvider>);
