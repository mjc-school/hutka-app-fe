import { FunctionComponent } from 'react';
import { ImageCard, IconCard, InputCard } from '../../components';

export abstract class CardSetup {
    abstract component: FunctionComponent<any>;
    private _swipable: boolean;
    valid: boolean;
    result: boolean | string | string[] = null;
    constructor(public caption: string) {}

    get swipable(): boolean {
        return this._swipable;
    }
    setResult(value: boolean | string | string[]): void {
        this.result = value;
        this.valid = !!(Array.isArray(value) ? value.length : value);
    }
}

export class InputCardSetup extends CardSetup {
    readonly component = InputCard;

    constructor(
        public iconType: string,
        public iconName: string,
        caption: string,
    ) {
        super(caption);
    }
}

export class IconCardSetup extends CardSetup {
    readonly component = IconCard;

    constructor(
        public iconType: string,
        public iconName: string,
        caption: string,
        options?: any[],
    ) {
        super(caption);
    }
}

export class ImageCardSetup extends CardSetup {
    readonly component = ImageCard;
    readonly valid = true;

    constructor(public imageUri: string, caption: string) {
        super(caption);
    }
}
