using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Core.Enums;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class OMAContext : DbContext
    {
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Address> Addresses { get; set; }
        public OMAContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Customer>().HasData(
                new Customer
                {
                    Id=1,
                    FirstName="James",
                    LastName="Bond",
                    ContactNumber="110",
                    IsDeleted=false,
                    Email="110@outlook.com"
                },
                new Customer
                {
                    Id=2,
                    FirstName="Snow",
                    LastName="White",
                    ContactNumber="111",
                    IsDeleted=false,
                    Email="111@outlook.com"
                }
            );

            modelBuilder.Entity<Address>().HasData(
                new Address
                {
                    Id=1,
                    CustomerId=1,
                    AddressLine1="111 Ave",
                    AddressLine2="Secret Block",
                    City="Vancouver",
                    State="BC",
                    Country="Canada"
                },
                new Address
                {
                    Id=2,
                    CustomerId=2,
                    AddressLine1="222 Ave",
                    AddressLine2="Secret Block",
                    City="Vancouver",
                    State="BC",
                    Country="Canada"
                }
            );

            modelBuilder.Entity<Order>().HasData(
                new Order{
                    Id=1,
                    CustomerId=1,
                    OrderDate=new DateTime(2022, 10, 20),
                    Description="new item",
                    TotalAmount=500,
                    DepositAmount=100,
                    IsDelivery=true,
                    Status=Status.Pending,
                    OtherNotes="trending item",
                    IsDeleted=false
                },
                new Order{
                    Id=2,
                    CustomerId=2,
                    OrderDate=new DateTime(2023, 11, 09),
                    Description="sale item",
                    TotalAmount=10,
                    DepositAmount=0,
                    IsDelivery=true,
                    Status=Status.Completed,
                    OtherNotes="year end sale",
                    IsDeleted=false
                }
            );
        }
    }
}