using AutoMapper;
using BGC_DataAccess.Entities;
using BGC_DataAccess.Interfaces;
using BGC_DataAccess.Services;
using BGC_WebApi.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace BGC_WebApi.Controllers;
/// <summary>
/// Controller for game sessions
/// </summary>
[Route("api/[controller]")]
[ApiController]
public class GameSessionController : BaseController
{
	private IGameSessionService gameSessionService;
	public GameSessionController(IGameSessionService gameSessionService, IMapper mapper) : base(mapper)
	{
		this.gameSessionService= gameSessionService;
	}
    /// <summary>
    /// Get ALl GameSessions
    /// </summary>
    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        return Ok(mapper.Map<IEnumerable<GameSessionDTO>>(await gameSessionService.GetAll()));
    }

    /// <summary>
    /// Get GameSession By Id
    /// </summary>
    [HttpGet]
    [Route("{id}")]

    public async Task<IActionResult> GetById(int id)
    {

        return Ok(mapper.Map<GameSessionDTO>(await gameSessionService.GetById(id)));
    }

    /// <summary>
    /// Create a new GameSession
    /// </summary>
    [HttpPost]
    public async Task<IActionResult> Post([FromBody] GameSessionDTO GameSessionDTO)
    {
        await gameSessionService.Insert(mapper.Map<GameSession>(GameSessionDTO));
        return Ok();
    }


    /// <summary>
    ///  Update a GameSession
    /// </summary>
    [HttpPut]
    public async Task<IActionResult> Put(int id, [FromBody] GameSessionDTO GameSessionDTO)
    {
        await gameSessionService.Update(id, mapper.Map<GameSession>(GameSessionDTO));
        return Ok();
    }

    /// <summary>
    /// Delete a GameSession
    /// </summary>
    [HttpDelete]
    public void Delete(int id)
    {
        //TO DO
    }
}
