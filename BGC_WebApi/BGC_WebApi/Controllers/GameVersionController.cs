using AutoMapper;
using BGC_DataAccess.Entities;
using BGC_DataAccess.Services;
using BGC_WebApi.DTOs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BGC_WebApi.Controllers;


/// <summary>
/// Controller for GameVersions
/// </summary>
[Authorize]
[Route("api/[controller]")]
[ApiController]
public class GameVersionController : ControllerBase
{
    private IMapper mapper;
    private GameVersionService gameVersionService;

    public GameVersionController(GameVersionService GameVersionService, IMapper mapper)
    {
        this.gameVersionService = GameVersionService;
        this.mapper = mapper;
    }

    /// <summary>
    /// Get ALl GameVersions
    /// </summary>
    [HttpGet]

    public IActionResult GetAll()
    {
        return Ok(mapper.Map<IEnumerable<GameVersionDTO>>(gameVersionService.GetAll()));
    }

    /// <summary>
    /// Get GameVersion By Id
    /// </summary>
    [HttpGet("Id")]

    public IActionResult GetById(int id)
    {

        return Ok(mapper.Map<GameVersionDTO>(gameVersionService.GetById(id)));
    }

    /// <summary>
    /// Create a new GameVersion
    /// </summary>
    [HttpPost]
    public IActionResult Post([FromBody] GameVersionDTO GameVersionDTO)
    {
        gameVersionService.Insert(mapper.Map<GameVersion>(GameVersionDTO));
        return Ok();
    }


    /// <summary>
    ///  Update a GameVersion
    /// </summary>
    [HttpPut]
    public IActionResult Put(int id, [FromBody] GameVersionDTO GameVersionDTO)
    {
        gameVersionService.Update(id, mapper.Map<GameVersion>(GameVersionDTO));
        return Ok();
    }

    /// <summary>
    /// Delete a GameVersion
    /// </summary>
    public void Delete(int id)
    {
        // A GameVersion cannot be deleted if versions of the GameVersion are linked
    }
}
