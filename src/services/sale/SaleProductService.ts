import prismaClient from "../../prisma";
import { SaleProductRequest } from "../../models/interfaces/sale/SaleProductRequest";

class SaleProductService {
	async execute({ product_id, amount }: SaleProductRequest) {
		if (!product_id || !amount) {
			throw new Error("Product data not sent");
		}

		const queryProduct = await prismaClient.product.findFirst({
			where: { id: product_id },
		});

		if (queryProduct?.amount > amount && amount > 0) {
			const newAmount = queryProduct?.amount - amount;
			const saveSale = await prismaClient.product.update({
				where: { id: product_id },
				data: { amount: newAmount },
				select: { id: true, name: true, amount: true },
			});
			return saveSale;
		} else {
			throw new Error("It was not possible to finish the sale");
		}
	}
}

export { SaleProductService };
