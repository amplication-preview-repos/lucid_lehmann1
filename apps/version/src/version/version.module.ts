import { Module } from "@nestjs/common";
import { VersionModuleBase } from "./base/version.module.base";
import { VersionService } from "./version.service";
import { VersionController } from "./version.controller";

@Module({
  imports: [VersionModuleBase],
  controllers: [VersionController],
  providers: [VersionService],
  exports: [VersionService],
})
export class VersionModule {}
