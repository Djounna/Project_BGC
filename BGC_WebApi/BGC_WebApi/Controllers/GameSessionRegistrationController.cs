using AutoMapper;
using BGC_DataAccess.Entities;
using BGC_DataAccess.Interfaces;
using BGC_DataAccess.Services;
using BGC_WebApi.DTOs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BGC_WebApi.Controllers;

/// <summary>
/// Controller for game session registrations
/// </summary>
[Route("api/[controller]")]
[ApiController]
public class GameSessionRegistrationController : BaseController
{
    private GameSessionRegistrationService gameSessionRegistrationService;
	public GameSessionRegistrationController(GameSessionRegistrationService gameSessionRegistrationService, IMapper mapper) : base(mapper)
	{
		this.gameSessionRegistrationService = gameSessionRegistrationService;
	}

    /// <summary>
    /// Get ALl Games
    /// </summary>
    [HttpGet]
    public async Task<ActionResult<IEnumerable<GameSessionRegistrationDTO>>> GetAll()
    {
        return Ok(mapper.Map<IEnumerable<GameSessionRegistrationDTO>>(await gameSessionRegistrationService.GetAll()));
    }

    /// <summary>
    /// Get GameSessionRegistration By Id
    /// </summary>
    /// <param name="id">Id</param>
    [HttpGet]
    [Route("{id}")]
    public async Task<ActionResult<GameSessionRegistrationDTO>> GetById(int id)
    {

        return Ok(mapper.Map<GameSessionRegistrationDTO>(await gameSessionRegistrationService.GetById(id)));
    }

    /// <summary>
    /// Create a new GameSessionRegistration
    /// </summary>
    /// <param name="gameSessionRegistrationDTO">Dto</param>
    [HttpPost]
    public async Task<ActionResult> Post([FromBody] GameSessionRegistrationDTO gameSessionRegistrationDTO)
    {
        await gameSessionRegistrationService.Insert(mapper.Map<GameSessionRegistration>(gameSessionRegistrationDTO));
        return Ok();
    }


    /// <summary>
    ///  Update a GameSessionRegistration
    /// </summary>
    /// <param name="id">Id</param>
    /// <param name="gameSessionRegistrationDTO">Dto</param>
    [HttpPut]
    public async Task<ActionResult> Put(int id, [FromBody] GameSessionRegistrationDTO gameSessionRegistrationDTO)
    {
        await gameSessionRegistrationService.Update(id, mapper.Map<GameSessionRegistration>(gameSessionRegistrationDTO));
        return Ok();
    }

    /// <summary>
    /// Delete a GameSessionRegistration
    /// </summary>
    /// <param name="id">Id</param>
    [HttpDelete]
    public void Delete(int id)
    {
        //TO DO
    }
}
