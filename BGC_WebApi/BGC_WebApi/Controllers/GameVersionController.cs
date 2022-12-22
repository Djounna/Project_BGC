using AutoMapper;
using BGC_DataAccess.Entities;
using BGC_DataAccess.Interfaces;
using BGC_DataAccess.Services;
using BGC_WebApi.DTOs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BGC_WebApi.Controllers;


/// <summary>
/// Controller for game versions
/// </summary>
[Authorize]
[Route("api/[controller]")]
[ApiController]
public class GameVersionController : BaseController
{
    private IGameVersionService gameVersionService;

    public GameVersionController(IGameVersionService gameVersionService, IMapper mapper) : base(mapper)
    {
        this.gameVersionService = gameVersionService;
    }

    /// <summary>
    /// Get All GameVersions
    /// </summary>
    [HttpGet]
    public async Task<ActionResult<IEnumerable<GameVersionDTO>>> GetAll()
    {
        return Ok(mapper.Map<IEnumerable<GameVersionDTO>>(await gameVersionService.GetAll()));
    }

    /// <summary> 
    /// Get GameVersion By Id
    /// </summary>
    /// <param name="id">Id</param>
    [HttpGet]
    [Route("{id}")]
    public async Task<ActionResult<GameVersionDTO>> GetById(int id)
    {
        return Ok(mapper.Map<GameVersionDTO>(await gameVersionService.GetById(id)));
    }

    /// <summary>
    /// Create a new GameVersion
    /// </summary>
    /// <param name="GameVersionDTO">Dto</param>
    [HttpPost]
    public async Task<ActionResult> Post([FromBody] GameVersionDTO GameVersionDTO)
    {
        await gameVersionService.Insert(mapper.Map<GameVersion>(GameVersionDTO));
        return Ok();
    }


    /// <summary>
    ///  Update a GameVersion
    /// </summary>
    /// <param name="id">Id</param>
    /// <param name="GameVersionDTO">Dto</param>
    [HttpPut]
    public async Task<ActionResult> Put(int id, [FromBody] GameVersionDTO GameVersionDTO)
    {
        await gameVersionService.Update(id, mapper.Map<GameVersion>(GameVersionDTO));
        return Ok();
    }

    /// <summary>
    /// Delete a GameVersion
    /// </summary>
    /// <param name="id">Id</param>
    [HttpDelete]
    public void Delete(int id)
    {
        // TO DO
    }
}
