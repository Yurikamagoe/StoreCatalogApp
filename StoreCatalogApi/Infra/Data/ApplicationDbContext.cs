using Microsoft.EntityFrameworkCore;
using StoreCatalogApi.Models;
using System.ComponentModel;

namespace StoreCatalogApi.Infra.Data;

public class ApplicationDbContext : DbContext
{
    public DbSet<Product> Products { get; set; }

    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { 
    
    }

    protected override void ConfigureConventions(ModelConfigurationBuilder configuration)
    {
        configuration.Properties<string>()
            .HaveMaxLength(100);

        configuration.Properties<DateOnly>()
           .HaveConversion<DateOnlyConverter>()
           .HaveColumnType("date");
    }
}
