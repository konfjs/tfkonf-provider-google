import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleApigeeEnvReferencesArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleApigeeEnvReferencesArgs {
  description?: string;
  env_id: string;
  name: string;
  refers: string;
  resource_type: string;
  timeouts?: GoogleApigeeEnvReferencesArgsTimeouts;
}

export class google_apigee_env_references extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleApigeeEnvReferencesArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_apigee_env_references", resourceName);
  }

  get env_id(): string {
    return `${this.resourceType}.${this.resourceName}.env_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get refers(): string {
    return `${this.resourceType}.${this.resourceName}.refers`;
  }

  get resource_type(): string {
    return `${this.resourceType}.${this.resourceName}.resource_type`;
  }
}
