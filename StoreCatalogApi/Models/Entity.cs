﻿namespace StoreCatalogApi.Models;

public abstract class Entity
{
    public Entity()
    {
        Id = Guid.NewGuid();
    }
    public Guid Id { get; set; }
    public DateTime CreationDate { get; set; }
    public DateTime UpdateDate { get; set; }
}
