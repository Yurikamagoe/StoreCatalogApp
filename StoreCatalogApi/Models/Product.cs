﻿using StoreCatalogApi.Enums;

namespace StoreCatalogApi.Models;

public class Product : Entity
{
    public string Name { get; set; }
    public decimal Price { get; set; }
    public string Description { get; set; }
    public int Quantity { get; set; }
    public DateTime RegisterDate { get; set; }
    public ProductType Type { get; set; }
}
