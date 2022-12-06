using Microsoft.AspNetCore.Mvc;

namespace BGC_WebApi.Controllers;

/// <summary>
/// Controller for Games
/// </summary>
[Route("api/[controller]")]
[ApiController]
public class GameController : ControllerBase
{
    public GameController()
    {
     
    }


    [HttpGet]
    public async Task<IActionResult<>  GetById(int id){
        

    }
}
