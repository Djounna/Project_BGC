using AutoMapper;
using BGC_BusinessLogic.Services;
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
    private GameSessionBLL gameSessionBLL;
	public GameSessionController(IGameSessionService gameSessionService, GameSessionBLL gameSessionBLL, IMapper mapper) : base(mapper)
	{
		this.gameSessionService= gameSessionService;
        this.gameSessionBLL= gameSessionBLL;
	}
    /// <summary>
    /// Get All GameSessions
    /// </summary>
    [HttpGet]
    public async Task<ActionResult<IEnumerable<GameSessionDTO>>> GetAll()
    {
        return Ok(mapper.Map<IEnumerable<GameSessionDTO>>(await gameSessionService.GetAll()));
    }

    /// <summary>
    /// Get GameSession By Id
    /// </summary>
    /// <param name="id">Id</param>
    [HttpGet]
    [Route("{id}")]

    public async Task<ActionResult<GameSessionDTO>> GetById(int id)
    {

        return Ok(mapper.Map<GameSessionDTO>(await gameSessionService.GetById(id)));
    }

    /// <summary>
    /// Create a new GameSession
    /// </summary>
    /// <param name="GameSessionDTO">Dto</param>
    [HttpPost]
    public async Task<ActionResult> Post([FromBody] GameSessionDTO GameSessionDTO)
    {
        await gameSessionService.Insert(mapper.Map<GameSession>(GameSessionDTO));
        return Ok();
    }


    /// <summary>
    ///  Update a GameSession
    /// </summary>
    /// <param name="id">Id</param>
    /// <param name="GameSessionDTO">Dto</param>
    [HttpPut]
    public async Task<ActionResult> Put(int id, [FromBody] GameSessionDTO GameSessionDTO)
    {
        await gameSessionService.Update(id, mapper.Map<GameSession>(GameSessionDTO));
        return Ok();
    }

    /// <summary>
    /// Delete a GameSession
    /// </summary>
    /// <param name="id">Id</param>
    [HttpDelete]
    public void Delete(int id)
    {
        //TO DO
    }

    /// <summary>
    /// Get all gamesessions by member
    /// </summary>
    /// <param name="memberName">Name of member</param>
    [HttpGet]
    [Route("memberName")]
    public async Task<ActionResult<IEnumerable<GameSessionDTO>>> GetAllByMember(string memberName)
    {
        return Ok(mapper.Map<IEnumerable<GameSessionDTO>>(await gameSessionBLL.GetAllByMember(memberName)));
    }
}
