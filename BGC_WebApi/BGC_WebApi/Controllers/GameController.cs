using AutoMapper;
using BGC_DataAccess.Entities;
using BGC_DataAccess.Services;
using BGC_WebApi.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace BGC_WebApi.Controllers;

/// <summary>
/// Controller for Games
/// </summary>
[Route("api/[controller]")]
[ApiController]
public class GameController : ControllerBase
{
    IMapper mapper;
    GameService gameService;

    public GameController(GameService gameService, IMapper mapper)
    {
        this.gameService = gameService;
        this.mapper = mapper;
    }

    /// <summary>
    /// Get ALl Games
    /// </summary>
    [HttpGet]

    public IActionResult GetAll()
    {
        return Ok(mapper.Map<IEnumerable<GameDTO>>(gameService.GetAll()));
    }

    /// <summary>
    /// Get Game By Id
    /// </summary>
    [HttpGet("Id")]

    public IActionResult GetById(int id){

        return Ok(mapper.Map<GameDTO>(gameService.GetById(id)));
    }

    /// <summary>
    /// Create a new Game
    /// </summary>
    [HttpPost]
    public IActionResult Post([FromBody] GameDTO gameDTO)
    {
        gameService.Insert(mapper.Map<Game>(gameDTO));
        return Ok();
    }


    /// <summary>
    ///  Update a Game
    /// </summary>
    [HttpPut]
    public IActionResult Put(int id, [FromBody] GameDTO gameDTO)
    {
        gameService.Update(id, mapper.Map<Game>(gameDTO));
        return Ok();
    }

    /// <summary>
    /// Delete a Game
    /// </summary>
    public void Delete(int id)
    {
        // A Game cannot be deleted if versions of the Game are linked
    }
    
}
