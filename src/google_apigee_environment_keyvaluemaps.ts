import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleApigeeEnvironmentKeyvaluemapsArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleApigeeEnvironmentKeyvaluemapsArgs {
  env_id: string;
  name: string;
  timeouts?: GoogleApigeeEnvironmentKeyvaluemapsArgsTimeouts;
}

export class google_apigee_environment_keyvaluemaps extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleApigeeEnvironmentKeyvaluemapsArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_apigee_environment_keyvaluemaps", resourceName);
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
}
