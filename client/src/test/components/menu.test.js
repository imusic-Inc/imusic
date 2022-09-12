import {render, screen, fireEvent} from '@testing-library/react'
import { BrowserRouter as Router } from "react-router-dom";
import Menu from '../../home/menu';
test('The PublicSession component should render', async () => {
    render(<Router><Menu/></Router>);
});