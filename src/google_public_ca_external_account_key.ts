import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GooglePublicCaExternalAccountKeyArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GooglePublicCaExternalAccountKeyArgs {
  location?: string;
  timeouts?: GooglePublicCaExternalAccountKeyArgsTimeouts;
}

export class google_public_ca_external_account_key extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GooglePublicCaExternalAccountKeyArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_public_ca_external_account_key", resourceName);
  }

  get b64_mac_key(): string {
    return `${this.resourceType}.${this.resourceName}.b64_mac_key`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get key_id(): string {
    return `${this.resourceType}.${this.resourceName}.key_id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
