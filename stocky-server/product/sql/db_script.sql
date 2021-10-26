CREATE TABLE products (
	id INT(11) AUTO_INCREMENT,
	product_name VARCHAR(50) NOT NULL,
	product_code VARCHAR(50) NOT NULL,
	category INT(50) NOT NULL,
	brand INT(50) NOT NULL,
	barcode VARCHAR(50) NOT NULL,
	product_cost FLOAT(50) NOT NULL,
	product_price FLOAT(50) NOT NULL,
	unit INT(50) NOT NULL,
	sale_unit INT(50) NOT NULL,
	purchase_unit INT(50) NOT NULL,
	stock_alert INT(50) NOT NULL,
	order_tax INT(50) NOT NULL,
	tax_type VARCHAR(50) NOT NULL,
	note Text NOT NULL,
	product_image VARCHAR(50) NOT NULL,
	 PRIMARY KEY(id)
);
