import { Request, Response } from "express";
import { SaleProductService } from "../../services/sale/SaleProductService";
import { SaleProductRequest } from "../../models/interfaces/sale/SaleProductRequest";

class SaleProductController {
	async handle(request: Request, response: Response) {
		const product_id = request.query.product_id as string;
		const { amount }: SaleProductRequest = request.body;
		const saleProductService = new SaleProductService();

		const saleproduct = await saleProductService.execute({
			product_id,
			amount,
		});

		return response.json(saleproduct);
	}
}

export { SaleProductController };
