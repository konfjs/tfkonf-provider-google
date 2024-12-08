import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleEssentialContactsContactArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleEssentialContactsContactArgs {
  email: string;
  language_tag: string;
  notification_category_subscriptions: string[];
  parent: string;
  timeouts?: GoogleEssentialContactsContactArgsTimeouts;
}

export class google_essential_contacts_contact extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleEssentialContactsContactArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_essential_contacts_contact", resourceName);
  }

  get email(): string {
    return `${this.resourceType}.${this.resourceName}.email`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get language_tag(): string {
    return `${this.resourceType}.${this.resourceName}.language_tag`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get notification_category_subscriptions(): string {
    return `${this.resourceType}.${this.resourceName}.notification_category_subscriptions`;
  }

  get parent(): string {
    return `${this.resourceType}.${this.resourceName}.parent`;
  }
}
