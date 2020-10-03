export interface address {
  street: string;
  doorNumber: number;
}
export interface Employee {
  name: string;
  age: number;
  country: string;
  address?: address;
}

export interface Nav {
  name: string;
  link: string;
}
