using AutoMapper;
using BGC_DataAccess.Entities;
using BGC_DataAccess.Interfaces;
using BGC_DataAccess.Services;
using BGC_WebApi.DTOs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace BGC_WebApi.Controllers;

/// <summary>
/// Controller for Games
/// </summary>
[Route("api/[controller]")]
[ApiController]
public class GameController : BaseController
{  
    private IGameService gameService;

    public GameController(IGameService gameService, IMapper mapper) : base(mapper)
    {
        this.gameService = gameService;
    }

    /// <summary>
    /// Get All Games
    /// </summary>
    [HttpGet]
    public async Task<ActionResult<IEnumerable<GameDTO>>> GetAll()
    {
        return Ok(mapper.Map<IEnumerable<GameDTO>>(await gameService.GetAll()));
    }

    /// <summary>
    /// Get Game By Id
    /// </summary>
    /// <param name="id">Id</param>
    [HttpGet]
    [Route("{id}")]

    public async Task<ActionResult<GameDTO>> GetById(int id)
    {
        return Ok(mapper.Map<GameDTO>(await gameService.GetById(id)));
    }

    /// <summary>
    /// Create a new Game
    /// </summary>
    /// <param name="gameDTO">Dto</param>
    [HttpPost]
    public async Task<ActionResult> Post([FromBody] GameDTO gameDTO)
    {
        await gameService.Insert(mapper.Map<Game>(gameDTO));
        return Ok();
    }

    /// <summary>
    ///  Update a Game
    /// </summary>
    /// <param name="id">Id</param>
    /// <param name="gameDTO">Dto</param>
    [HttpPut]
    public async Task<ActionResult> Put(int id, [FromBody] GameDTO gameDTO)
    {
        await gameService.Update(id, mapper.Map<Game>(gameDTO));
        return Ok();
    }

    /// <summary>
    /// Delete a Game
    /// </summary>
    /// <param name="id">Id</param>
    [HttpDelete]
    public void Delete(int id)
    {
        // A Game cannot be deleted if versions of the Game are linked
    }
    
}
