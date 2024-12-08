import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleApigeeEnvironmentKeyvaluemapsEntriesArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleApigeeEnvironmentKeyvaluemapsEntriesArgs {
  env_keyvaluemap_id: string;
  name: string;
  value: string;
  timeouts?: GoogleApigeeEnvironmentKeyvaluemapsEntriesArgsTimeouts;
}

export class google_apigee_environment_keyvaluemaps_entries extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleApigeeEnvironmentKeyvaluemapsEntriesArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_apigee_environment_keyvaluemaps_entries", resourceName);
  }

  get env_keyvaluemap_id(): string {
    return `${this.resourceType}.${this.resourceName}.env_keyvaluemap_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get value(): string {
    return `${this.resourceType}.${this.resourceName}.value`;
  }
}
