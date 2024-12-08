import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleApigeeEnvKeystoreArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleApigeeEnvKeystoreArgs {
  env_id: string;
  name?: string;
  timeouts?: GoogleApigeeEnvKeystoreArgsTimeouts;
}

export class google_apigee_env_keystore extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleApigeeEnvKeystoreArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_apigee_env_keystore", resourceName);
  }

  get aliases(): string {
    return `${this.resourceType}.${this.resourceName}.aliases`;
  }

  get env_id(): string {
    return `${this.resourceType}.${this.resourceName}.env_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
