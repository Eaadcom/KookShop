export class StorageService {

  shoppingCartStorageKey: string = 'shoppingCart';
  JWTKey: string = 'JWT';

  constructor() {}

  saveShoppingCartInLocalStorage(value: Map<string, number>){
    localStorage.setItem(this.shoppingCartStorageKey, JSON.stringify(Array.from(value)));
  }

  getShoppingCartFromLocalStorage(): Map<string, number>{
    return new Map(JSON.parse(localStorage.getItem(this.shoppingCartStorageKey) || '[]'));
  }

  getShoppingCartFromLocalStorageAsArray(): []{
    return JSON.parse(localStorage.getItem(this.shoppingCartStorageKey) || '[]');
  }

  emptyShoppingCart(){
    const shoppingCart: Map<string, number> = new Map<string, number>();
    this.saveShoppingCartInLocalStorage(shoppingCart);
  }

  isJwtInLocalstorage(): boolean{
    return localStorage.getItem(this.JWTKey) !== null;
  }

  getJWTFromLocalStorage(): string{
    return <string>localStorage.getItem(this.JWTKey);
  }

  shoppingCartExistsInLocalStorage(): boolean{
    if (localStorage.getItem(this.shoppingCartStorageKey) === null){
      const shoppingCart: Map<string, number> = new Map<string, number>();
      this.saveShoppingCartInLocalStorage(shoppingCart);
      return false;
    }
    return true;
  }

  addToCart(name: string){
    let shoppingCart = this.getShoppingCartFromLocalStorage();
    if(shoppingCart.has(name)) {
      let productAmount = shoppingCart.get(name);
      shoppingCart.set(name, productAmount! + 1);
    } else {
      shoppingCart.set(name, 1);
    }
    this.saveShoppingCartInLocalStorage(shoppingCart);
  }

  removeFromCart(name: string){
    let shoppingCart = this.getShoppingCartFromLocalStorage();
    let productAmount = shoppingCart.get(name);
    if(productAmount! > 1) {
      shoppingCart.set(name, productAmount! - 1);
    } else {
      shoppingCart.delete(name);
    }
    this.saveShoppingCartInLocalStorage(shoppingCart);
  }

  getProductAmount(name: string): number{
    let shoppingCart = this.getShoppingCartFromLocalStorage()
    if(shoppingCart.has(name)){
      return shoppingCart.get(name)!;
    } else{
      return 0;
    }
  }

}
