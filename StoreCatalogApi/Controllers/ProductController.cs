using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StoreCatalogApi.Enums;
using StoreCatalogApi.Infra.Data;
using StoreCatalogApi.Models;

namespace StoreCatalogApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public ProductController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Product>>> GetAllAsync()
    {
        return await _context.Products.ToListAsync();
    }

    [HttpGet("{productId:Guid}")]
    public async Task<ActionResult<Product>> GetProductById([FromRoute] Guid productId)
    {
        Product product = await _context.Products.FindAsync(productId);

        if (product == null)
            return NotFound();

        return product;
    }

    [HttpPost]
    public async Task<ActionResult<Product>> CreateProduct(ProductRequest productRequest)
    {
        Product product = ProductMapper(productRequest);

        await _context.Products.AddAsync(product);
        await _context.SaveChangesAsync();

        return Ok(product);
    }

    private static Product ProductMapper(ProductRequest productRequest)
    {
        return new Product()
        {
            Name = productRequest.Name,
            Price = productRequest.Price,
            Description = productRequest.Description,
            Quantity = productRequest.Quantity,
            RegisterDate = productRequest.RegisterDate,
            Type = (ProductType)productRequest.Type
        };
    }
}
