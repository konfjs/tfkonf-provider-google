import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIamWorkforcePoolArgsAccessRestrictionsAllowedServices {
  domain?: string;
}

export interface GoogleIamWorkforcePoolArgsAccessRestrictions {
  disable_programmatic_signin?: boolean;
  allowed_services?: GoogleIamWorkforcePoolArgsAccessRestrictionsAllowedServices[];
}

export interface GoogleIamWorkforcePoolArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleIamWorkforcePoolArgs {
  description?: string;
  disabled?: boolean;
  display_name?: string;
  location: string;
  parent: string;
  session_duration?: string;
  workforce_pool_id: string;
  access_restrictions?: GoogleIamWorkforcePoolArgsAccessRestrictions;
  timeouts?: GoogleIamWorkforcePoolArgsTimeouts;
}

export class google_iam_workforce_pool extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleIamWorkforcePoolArgs) {
    const meta = {access_restrictions:{isBlock:true,allowed_services:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_iam_workforce_pool", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get parent(): string {
    return `${this.resourceType}.${this.resourceName}.parent`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get workforce_pool_id(): string {
    return `${this.resourceType}.${this.resourceName}.workforce_pool_id`;
  }
}
