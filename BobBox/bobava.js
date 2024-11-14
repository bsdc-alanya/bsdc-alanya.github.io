console.log("this is bob");

console.log(" this is bob");
console.log("  this is bob");
console.log("   this is bob");
console.log("    this is bob");
console.log("     this is bob");
console.log("      this is bob");
console.log("       this is bob");
console.log("        this is bob");
console.log("         this is bob");
console.log("          this is bob");
console.log("           this is bob");
console.log("            this is bob");
console.log("             this is bob");
console.log("              this is bob");
console.log("               this is bob");
console.log("                this is bob");
console.log("                 this is bob");
console.log("                  this is bob");
console.log("                   this is bob");
console.log("                    this is bob");
console.log("                     this is bob");
console.log("                      this is bob");
console.log("                       this is bob");
console.log("                        this is bob");
console.log("                         this is bob");
console.log("                          this is bob");
console.log("                           this is bob");
console.log("                            this is bob");
console.log("                             this is bob");
console.log("                              this is bob");
console.log("                               this is bob");
console.log("                                this is bob");
console.log("                                 this is bob");
console.log("                                  this is bob");
console.log("                                   this is bob");
console.log("                                    this is bob");
console.log("                                     this is bob");
console.log("                                      this is bob");
console.log("                                       this is bob");
console.log("                                        this is bob");
console.log("                                         this is bob");


const bob = document.getElementById("bobinarob");
console.log(bob.innerHTML);

let switchbob = false;

function BYEBOB(){
    if (switchbob) {
        bob.innerHTML = `<h1>yes</h1>
        <img scr="download-removebg-preview.png" alt="bob">`;
    } else{
        bob.innerHTML = `<h1>no</h1>
        <img src="download.jpg" alt="bob2">`
    }
    switchbob = !switchbob
}