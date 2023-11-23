import { render, screen } from "@testing-library/react"
import { MainApp } from "./MainApp"
import { MemoryRouter } from "react-router-dom"

describe('Pruebas en <MainApp/>', () => { 
    test('debe de mostrar el HomePage', () => { 
       
        render(
        <MemoryRouter>
            <MainApp/>
        </MemoryRouter>
        )
        // screen.debug();
        expect(screen.getByText('HomePage')).toBeTruthy();
        
     });

     test('debe de mostrar el LoginPage', () => { 
       
        render(
        <MemoryRouter initialEntries={['/login']}>
            <MainApp/>
        </MemoryRouter>
        )
        // screen.debug();
        expect(screen.getByText('LoginPage')).toBeTruthy();
        
     });
 })