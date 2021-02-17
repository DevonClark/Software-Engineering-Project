using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using BerardAutomotive.Data;
using BerardAutomotive.Features.Authentication;
using BerardAutomotive.Features.Authentication.Dtos;
using BerardAutomotive.Features.Users;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BerardAutomotive.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly UserManager<User> userManager;
        private readonly SignInManager<User> signInManager;
        private readonly DataContext dataContext;

        public AuthenticationController(UserManager<User> userManager, SignInManager<User> signInManager, DataContext dataContext)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
            this.dataContext = dataContext;
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserRoleDto>> Login(LoginDto dto)
        {
            var user = await userManager.FindByNameAsync(dto.Username);
            if (user == null)
            {
                return BadRequest();
            }

            var result = await signInManager.CheckPasswordSignInAsync(user, dto.Password, true);
            if (!result.Succeeded)
            {
                return BadRequest();
            }

            await signInManager.SignInAsync(user, false, "Password");

            var roles = await userManager.GetRolesAsync(user);

            return Ok(new UserRoleDto
            {
                Id = user.Id,
                Username = user.UserName,
                UserRoles = roles
            });;
        }

        [HttpPost("logout")]
        public async Task<ActionResult> Logout()
        {
            await signInManager.SignOutAsync();

            return Ok();
        }

        [HttpGet("me")]
        public async Task<UserDto> Me()
        {
            var userName = User.Identity.Name;
            return await dataContext.Set<User>()
                .Where(x => x.UserName == userName)
                .Select(x => new UserDto
                {
                    UserName = x.UserName,
                })
                .FirstOrDefaultAsync();
        }
    }
}
