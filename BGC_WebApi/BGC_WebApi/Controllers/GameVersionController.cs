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
    public async Task<IActionResult> GetAll()
    {
        return Ok(mapper.Map<IEnumerable<GameVersionDTO>>(await gameVersionService.GetAll()));
    }

    /// <summary> 
    /// Get GameVersion By Id
    /// </summary>
    [HttpGet]
    [Route("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        return Ok(mapper.Map<GameVersionDTO>(await gameVersionService.GetById(id)));
    }

    /// <summary>
    /// Create a new GameVersion
    /// </summary>
    [HttpPost]
    public async Task<IActionResult> Post([FromBody] GameVersionDTO GameVersionDTO)
    {
        await gameVersionService.Insert(mapper.Map<GameVersion>(GameVersionDTO));
        return Ok();
    }


    /// <summary>
    ///  Update a GameVersion
    /// </summary>
    [HttpPut]
    public async Task<IActionResult> Put(int id, [FromBody] GameVersionDTO GameVersionDTO)
    {
        await gameVersionService.Update(id, mapper.Map<GameVersion>(GameVersionDTO));
        return Ok();
    }

    /// <summary>
    /// Delete a GameVersion
    /// </summary>
    [HttpDelete]
    public void Delete(int id)
    {
        // TO DO
    }
}
