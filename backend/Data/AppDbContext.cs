using crud_fullstack.Models;
using Microsoft.EntityFrameworkCore;

namespace crud_fullstack.Data
{
    public class AppDbContext : DbContext
    {
        protected AppDbContext()
        {
        }

        public AppDbContext( DbContextOptions<AppDbContext> options )
            : base( options )
        {
        }

        public DbSet<ItemModel> Items { get; set; }

    }
}
