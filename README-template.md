body {
    margin: 0px;
    padding: 0px;
    border: 0px;
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 25px;
    padding-top: 25px;
    margin: 0px;
    background: 
            /* First layer: SVG image */
            url('./assets/images/background-pattern-mobile.svg') no-repeat center top,
            /* Second layer: solid color */
            hsl(275, 100%, 97%);
        background-size: 100% auto, 100% 80%;
        background-position: center top, center bottom;
    
}

.centered-div{
    background-color: hsl(0, 0%, 100%);
    padding: 20px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    margin: 25px;
    width: 310px;
}

p {
    font-size: 16px;
    color: hsl(292, 16%, 49%);
    font-weight: 400px;
    margin-bottom: 20px;
}

.flex{
    display: flex;
    flex-direction: row;
    gap: 15px;

}

.flex svg {
    margin-top: 20px;
    width: 30px;
}

h1 {
    color:hsl(292, 42%, 14%);
    font-family: "Work Sans", sans-serif;
  font-optical-sizing: auto;
}

h2 {
    color:hsl(292, 42%, 14%);
    font-family: "Work Sans", sans-serif;
    font-optical-sizing: auto;
    font-size: 16px
    
    

}

.grid {
    display: grid;
    grid-template-columns: 230px 80px; 
    grid-template-rows: 100px; 
    gap: 10px; /* Optional: add some space between the grid items */
    padding: 0px;

}
.flex-item-fixed {
    
    padding: 20px;
    margin: 0px;
    
    width: 50px; 
}

.h2-flex{
    padding: 0px;
    margin: 0px;
    
    

}

.first {
    margin-top: 25px;
}

@media (min-width: 420px){
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        height: 100%;
        padding: 25px;
        padding-top: 25px;
        margin: 0px;
        background: 
                /* First layer: SVG image */
                url('./assets/images/background-pattern-desktop.svg') no-repeat center top,
                /* Second layer: solid color */
                hsl(275, 100%, 97%);
            background-size: 100% auto, 100% 80%;
            background-position: center top, center bottom;
    }

    .centered-div{
        background-color: hsl(0, 0%, 100%);
        padding: 20px;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        margin: 25px;
        flex-basis: 310px;
        flex-grow: 1;
        max-width: 500px;
    }

    .grid {
        display: grid;
        grid-template-columns: 3fr 1frx; 
        grid-template-rows: 100px; 
        gap: 10px; /* Optional: add some space between the grid items */
        padding: 0px;
    
    }

}











background: 
            /* First layer: SVG image */
            url('./assets/images/background-pattern-desktop.svg') no-repeat center top,
            /* Second layer: solid color */
            hsl(275, 100%, 97%);
    background-size: 100% auto, 100% 80%;
    background-position: center top, center 30%;