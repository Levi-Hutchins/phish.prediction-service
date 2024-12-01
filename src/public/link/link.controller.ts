import { Controller, Get } from "@nestjs/common";
import { LinkService } from "./link.service";

@Controller()
export class LinkController{
    constructor(private readonly linkService: LinkService) {}

    @Get()
    getHealth(): string{
        return this.linkService.getHealth();
    }
}
