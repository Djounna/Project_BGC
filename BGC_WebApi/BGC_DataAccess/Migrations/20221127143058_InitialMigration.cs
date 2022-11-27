using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BGCDataAccess.Migrations
{
    /// <inheritdoc />
    public partial class InitialMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Games",
                columns: table => new
                {
                    GameId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MinNumberPlayers = table.Column<int>(type: "int", nullable: true),
                    MaxNumberPlayers = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Games", x => x.GameId);
                });

            migrationBuilder.CreateTable(
                name: "GameTables",
                columns: table => new
                {
                    GameTableId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Size = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GameTables", x => x.GameTableId);
                });

            migrationBuilder.CreateTable(
                name: "Members",
                columns: table => new
                {
                    MemberId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Role = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Members", x => x.MemberId);
                });

            migrationBuilder.CreateTable(
                name: "GameVersions",
                columns: table => new
                {
                    GameVersionId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    GameId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GameVersions", x => x.GameVersionId);
                    table.ForeignKey(
                        name: "FK_GameVersions_Games_GameId",
                        column: x => x.GameId,
                        principalTable: "Games",
                        principalColumn: "GameId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "GameSessions",
                columns: table => new
                {
                    GameSessionId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Schedule = table.Column<DateTime>(type: "datetime2", nullable: false),
                    MinNumberPlayers = table.Column<int>(type: "int", nullable: true),
                    MaxNumberPlayers = table.Column<int>(type: "int", nullable: true),
                    Status = table.Column<int>(type: "int", nullable: false),
                    Length = table.Column<int>(type: "int", nullable: true),
                    OrganizerId = table.Column<int>(type: "int", nullable: true),
                    TableGameTableId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GameSessions", x => x.GameSessionId);
                    table.ForeignKey(
                        name: "FK_GameSessions_GameTables_TableGameTableId",
                        column: x => x.TableGameTableId,
                        principalTable: "GameTables",
                        principalColumn: "GameTableId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GameSessions_Members_OrganizerId",
                        column: x => x.OrganizerId,
                        principalTable: "Members",
                        principalColumn: "MemberId");
                });

            migrationBuilder.CreateTable(
                name: "RpgCampaigns",
                columns: table => new
                {
                    RpgCampaignId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OrganizerId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RpgCampaigns", x => x.RpgCampaignId);
                    table.ForeignKey(
                        name: "FK_RpgCampaigns_Members_OrganizerId",
                        column: x => x.OrganizerId,
                        principalTable: "Members",
                        principalColumn: "MemberId");
                });

            migrationBuilder.CreateTable(
                name: "GameSessionGames",
                columns: table => new
                {
                    GameSessionGameId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    GameSessionId = table.Column<int>(type: "int", nullable: false),
                    GameVersionId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GameSessionGames", x => x.GameSessionGameId);
                    table.ForeignKey(
                        name: "FK_GameSessionGames_GameSessions_GameSessionId",
                        column: x => x.GameSessionId,
                        principalTable: "GameSessions",
                        principalColumn: "GameSessionId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GameSessionGames_GameVersions_GameVersionId",
                        column: x => x.GameVersionId,
                        principalTable: "GameVersions",
                        principalColumn: "GameVersionId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "GameSessionRegistrations",
                columns: table => new
                {
                    GameSessionRegistrationId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MemberId = table.Column<int>(type: "int", nullable: false),
                    GameSessionId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GameSessionRegistrations", x => x.GameSessionRegistrationId);
                    table.ForeignKey(
                        name: "FK_GameSessionRegistrations_GameSessions_GameSessionId",
                        column: x => x.GameSessionId,
                        principalTable: "GameSessions",
                        principalColumn: "GameSessionId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GameSessionRegistrations_Members_MemberId",
                        column: x => x.MemberId,
                        principalTable: "Members",
                        principalColumn: "MemberId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "RpgCampaignRegistrations",
                columns: table => new
                {
                    RpgCampaignRegistrationId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MemberId = table.Column<int>(type: "int", nullable: false),
                    RpgCampaignId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RpgCampaignRegistrations", x => x.RpgCampaignRegistrationId);
                    table.ForeignKey(
                        name: "FK_RpgCampaignRegistrations_Members_MemberId",
                        column: x => x.MemberId,
                        principalTable: "Members",
                        principalColumn: "MemberId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_RpgCampaignRegistrations_RpgCampaigns_RpgCampaignId",
                        column: x => x.RpgCampaignId,
                        principalTable: "RpgCampaigns",
                        principalColumn: "RpgCampaignId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "RpgSessions",
                columns: table => new
                {
                    RpgSessionId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Schedule = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Status = table.Column<int>(type: "int", nullable: false),
                    CampaignRpgCampaignId = table.Column<int>(type: "int", nullable: false),
                    TableGameTableId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RpgSessions", x => x.RpgSessionId);
                    table.ForeignKey(
                        name: "FK_RpgSessions_GameTables_TableGameTableId",
                        column: x => x.TableGameTableId,
                        principalTable: "GameTables",
                        principalColumn: "GameTableId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_RpgSessions_RpgCampaigns_CampaignRpgCampaignId",
                        column: x => x.CampaignRpgCampaignId,
                        principalTable: "RpgCampaigns",
                        principalColumn: "RpgCampaignId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "RpgSessionGames",
                columns: table => new
                {
                    RpgSessionGameId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RpgSessionId = table.Column<int>(type: "int", nullable: false),
                    GameVersionId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RpgSessionGames", x => x.RpgSessionGameId);
                    table.ForeignKey(
                        name: "FK_RpgSessionGames_GameVersions_GameVersionId",
                        column: x => x.GameVersionId,
                        principalTable: "GameVersions",
                        principalColumn: "GameVersionId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_RpgSessionGames_RpgSessions_RpgSessionId",
                        column: x => x.RpgSessionId,
                        principalTable: "RpgSessions",
                        principalColumn: "RpgSessionId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_GameSessionGames_GameSessionId",
                table: "GameSessionGames",
                column: "GameSessionId");

            migrationBuilder.CreateIndex(
                name: "IX_GameSessionGames_GameVersionId",
                table: "GameSessionGames",
                column: "GameVersionId");

            migrationBuilder.CreateIndex(
                name: "IX_GameSessionRegistrations_GameSessionId",
                table: "GameSessionRegistrations",
                column: "GameSessionId");

            migrationBuilder.CreateIndex(
                name: "IX_GameSessionRegistrations_MemberId",
                table: "GameSessionRegistrations",
                column: "MemberId");

            migrationBuilder.CreateIndex(
                name: "IX_GameSessions_OrganizerId",
                table: "GameSessions",
                column: "OrganizerId");

            migrationBuilder.CreateIndex(
                name: "IX_GameSessions_TableGameTableId",
                table: "GameSessions",
                column: "TableGameTableId");

            migrationBuilder.CreateIndex(
                name: "IX_GameVersions_GameId",
                table: "GameVersions",
                column: "GameId");

            migrationBuilder.CreateIndex(
                name: "IX_RpgCampaignRegistrations_MemberId",
                table: "RpgCampaignRegistrations",
                column: "MemberId");

            migrationBuilder.CreateIndex(
                name: "IX_RpgCampaignRegistrations_RpgCampaignId",
                table: "RpgCampaignRegistrations",
                column: "RpgCampaignId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_RpgCampaigns_OrganizerId",
                table: "RpgCampaigns",
                column: "OrganizerId");

            migrationBuilder.CreateIndex(
                name: "IX_RpgSessionGames_GameVersionId",
                table: "RpgSessionGames",
                column: "GameVersionId");

            migrationBuilder.CreateIndex(
                name: "IX_RpgSessionGames_RpgSessionId",
                table: "RpgSessionGames",
                column: "RpgSessionId");

            migrationBuilder.CreateIndex(
                name: "IX_RpgSessions_CampaignRpgCampaignId",
                table: "RpgSessions",
                column: "CampaignRpgCampaignId");

            migrationBuilder.CreateIndex(
                name: "IX_RpgSessions_TableGameTableId",
                table: "RpgSessions",
                column: "TableGameTableId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "GameSessionGames");

            migrationBuilder.DropTable(
                name: "GameSessionRegistrations");

            migrationBuilder.DropTable(
                name: "RpgCampaignRegistrations");

            migrationBuilder.DropTable(
                name: "RpgSessionGames");

            migrationBuilder.DropTable(
                name: "GameSessions");

            migrationBuilder.DropTable(
                name: "GameVersions");

            migrationBuilder.DropTable(
                name: "RpgSessions");

            migrationBuilder.DropTable(
                name: "Games");

            migrationBuilder.DropTable(
                name: "GameTables");

            migrationBuilder.DropTable(
                name: "RpgCampaigns");

            migrationBuilder.DropTable(
                name: "Members");
        }
    }
}
