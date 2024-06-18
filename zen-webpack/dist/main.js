(() => { 
    "use strict"; 
    new class { 
        constructor(e) { 
            this.name = e 
        } 
        greet() { 
            console.log(`Hello, ${this.name}!`) 
        } 
    }("daro").greet() 
})();