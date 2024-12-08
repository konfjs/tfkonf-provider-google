import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleResourceManagerLienArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleResourceManagerLienArgs {
  origin: string;
  parent: string;
  reason: string;
  restrictions: string[];
  timeouts?: GoogleResourceManagerLienArgsTimeouts;
}

export class google_resource_manager_lien extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleResourceManagerLienArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_resource_manager_lien", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get origin(): string {
    return `${this.resourceType}.${this.resourceName}.origin`;
  }

  get parent(): string {
    return `${this.resourceType}.${this.resourceName}.parent`;
  }

  get reason(): string {
    return `${this.resourceType}.${this.resourceName}.reason`;
  }

  get restrictions(): string {
    return `${this.resourceType}.${this.resourceName}.restrictions`;
  }
}
