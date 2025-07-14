using ManageUserApi.Data;
using Microsoft.EntityFrameworkCore;

namespace ManageUserApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();

            builder.Services.AddDbContext<AppDbContext>(options => options.UseInMemoryDatabase("UserDb"));

            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddCors();

            var app = builder.Build();

            app.UseCors(b => b
            .AllowAnyMethod()
            .AllowAnyHeader()
            .AllowAnyOrigin()
            );
            app.UseSwagger();
            app.UseSwaggerUI();

            // Configure the HTTP request pipeline.

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}