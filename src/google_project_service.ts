import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleProjectServiceArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
  update?: string;
}

export interface GoogleProjectServiceArgs {
  disable_dependent_services?: boolean;
  disable_on_destroy?: boolean;
  service: string;
  timeouts?: GoogleProjectServiceArgsTimeouts;
}

export class google_project_service extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleProjectServiceArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_project_service", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get service(): string {
    return `${this.resourceType}.${this.resourceName}.service`;
  }
}
