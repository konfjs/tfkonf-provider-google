import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleApigeeDeveloperArgsAttributes {
  name?: string;
  value?: string;
}

export interface GoogleApigeeDeveloperArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleApigeeDeveloperArgs {
  email: string;
  first_name: string;
  last_name: string;
  org_id: string;
  user_name: string;
  attributes?: GoogleApigeeDeveloperArgsAttributes[];
  timeouts?: GoogleApigeeDeveloperArgsTimeouts;
}

export class google_apigee_developer extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleApigeeDeveloperArgs) {
    const meta = {attributes:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_apigee_developer", resourceName);
  }

  get created_at(): string {
    return `${this.resourceType}.${this.resourceName}.created_at`;
  }

  get email(): string {
    return `${this.resourceType}.${this.resourceName}.email`;
  }

  get first_name(): string {
    return `${this.resourceType}.${this.resourceName}.first_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_modified_at(): string {
    return `${this.resourceType}.${this.resourceName}.last_modified_at`;
  }

  get last_name(): string {
    return `${this.resourceType}.${this.resourceName}.last_name`;
  }

  get org_id(): string {
    return `${this.resourceType}.${this.resourceName}.org_id`;
  }

  get organizatio_name(): string {
    return `${this.resourceType}.${this.resourceName}.organizatio_name`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get user_name(): string {
    return `${this.resourceType}.${this.resourceName}.user_name`;
  }
}
