import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleApigeeApiArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleApigeeApiArgs {
  config_bundle: string;
  detect_md5hash?: string;
  name: string;
  org_id: string;
  timeouts?: GoogleApigeeApiArgsTimeouts;
}

export class google_apigee_api extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleApigeeApiArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_apigee_api", resourceName);
  }

  get config_bundle(): string {
    return `${this.resourceType}.${this.resourceName}.config_bundle`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get latest_revision_id(): string {
    return `${this.resourceType}.${this.resourceName}.latest_revision_id`;
  }

  get md5hash(): string {
    return `${this.resourceType}.${this.resourceName}.md5hash`;
  }

  get meta_data(): string {
    return `${this.resourceType}.${this.resourceName}.meta_data`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get org_id(): string {
    return `${this.resourceType}.${this.resourceName}.org_id`;
  }

  get revision(): string {
    return `${this.resourceType}.${this.resourceName}.revision`;
  }
}
