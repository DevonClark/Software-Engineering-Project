using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BerardAutomotive.Features.Service;
using BerardAutomotive.Features.Appointment;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using BerardAutomotive.Features.Authentication;
using Microsoft.AspNetCore.Identity;
using System.Security.Cryptography.X509Certificates;
using BerardAutomotive.Features.Events;

namespace BerardAutomotive.Data
{
    public class DataContext : IdentityDbContext<User, Role, int, IdentityUserClaim<int>, UserRole, IdentityUserLogin<int>, IdentityRoleClaim<int>, IdentityUserToken<int>>
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            var userRoleBuilder =modelBuilder.Entity<UserRole>();

            userRoleBuilder.HasKey(x => new { x.UserId, x.RoleId });

            userRoleBuilder.HasOne(x => x.Role)
                .WithMany(x => x.Users)
                .HasForeignKey(x => x.RoleId);

            userRoleBuilder.HasOne(x => x.Role)
                .WithMany(x => x.Users)
                .HasForeignKey(x => x.UserId);

        }

        public DbSet<Service> Service { get; set; }
        
        public DbSet<Appointment> Appointments { get; set; }

        public DbSet<Event> Event { get; set; }
    }
}
