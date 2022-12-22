using AutoMapper;
using BGC_DataAccess.Entities;
using BGC_DataAccess.Interfaces;
using BGC_WebApi.DTOs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BGC_WebApi.Controllers;

/// <summary>
/// Controller for RPG sessions
/// </summary>
[Route("api/[controller]")]
[ApiController]
public class RpgSessionController : BaseController
{
    private IRpgSessionService rpgSessionService;

    public RpgSessionController(IRpgSessionService rpgSessionService, IMapper mapper) : base(mapper)
    {
        this.rpgSessionService = rpgSessionService;
    }

    /// <summary>
    /// Get All Rpg Sessions
    /// </summary>
    [HttpGet]

    public async Task<ActionResult<IEnumerable<RpgSessionDTO>>> GetAll()
    {
        return Ok(mapper.Map<IEnumerable<RpgSessionDTO>>(await rpgSessionService.GetAll()));
    }

    /// <summary>
    /// Get RpgSession By Id
    /// </summary>
    /// <param name="id">Id</param>
    [HttpGet]
    [Route("{id}")]

    public async Task<ActionResult<RpgSessionDTO>> GetById(int id)
    {
        return Ok(mapper.Map<RpgSessionDTO>(await rpgSessionService.GetById(id)));
    }

    /// <summary>
    /// Create a new RpgSession
    /// </summary>
    /// <param name="RpgSessionDTO">Dto</param>
    [HttpPost]
    public async Task<ActionResult> Post([FromBody] RpgSessionDTO RpgSessionDTO)
    {
        await rpgSessionService.Insert(mapper.Map<RpgSession>(RpgSessionDTO));
        return Ok();
    }


    /// <summary>
    ///  Update a RpgSession
    /// </summary>
    /// <param name="id">Id</param>
    /// <param name="RpgSessionDTO">Dto</param>
    [HttpPut]
    public async Task<ActionResult> Put(int id, [FromBody] RpgSessionDTO RpgSessionDTO)
    {
        await rpgSessionService.Update(id, mapper.Map<RpgSession>(RpgSessionDTO));
        return Ok();
    }

    /// <summary>
    /// Delete a RpgSession
    /// </summary>
    /// <param name="id">Id</param>
    [HttpDelete]
    public void Delete(int id)
    {
        // TO DO
    }
}