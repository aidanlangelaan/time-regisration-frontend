import { CreateCustomer, Customer, UpdateCustomer } from "./customer-service.types";

class CustomerServiceInternal {
	BASE_URL = process.env.REACT_APP_API_BASE_URL;

	static instance = null as unknown as CustomerServiceInternal;

	static getInstance() {
		if (!CustomerServiceInternal.instance) {
			CustomerServiceInternal.instance = new CustomerServiceInternal();
			return CustomerServiceInternal.instance;
		}
		return CustomerServiceInternal.instance;
	}

	getCustomers(): Promise<Customer[]> {
		return fetch(`${this.BASE_URL}/customers`).then((response) => response.json());
	}

	getCustomer(id: string): Promise<Customer> {
		return fetch(`${this.BASE_URL}/customers/${id}`).then((response) => response.json());
	}

	createCustomer(customer: CreateCustomer): Promise<Customer> {
		return fetch(`${this.BASE_URL}/customers`, {
			method: "POST",
			body: JSON.stringify({ ...customer, id: Math.floor(Math.random() * 25) }),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		}).then((response) => response.json());
	}

	updateCustomer(id: string, customer: UpdateCustomer): Promise<Customer> {
		return fetch(`${this.BASE_URL}/customers/${id}`, {
			method: "PUT",
			body: JSON.stringify(customer),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		}).then((response) => response.json());
	}

	deleteCustomer(id: string): void {
		fetch(`${this.BASE_URL}customers/${id}`, {
			method: "DELETE",
		});
	}
}
export const CustomerService = CustomerServiceInternal.getInstance();
